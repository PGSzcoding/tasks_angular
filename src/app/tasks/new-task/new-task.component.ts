import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required:true}) userId!:string
  @Output() close = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()

  private tasksService = inject(TasksService)
  title = ''
  summary = ''
  dueDate = ''

  onCancel(){
    this.close.emit()
  }
  
  onSubmit(){
    this.tasksService.onAddTask({title : this.title,summary : this.summary, dueDate : this.dueDate},this.userId)
     this.close.emit()
  }
}
