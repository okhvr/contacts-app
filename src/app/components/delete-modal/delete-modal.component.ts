import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  @Output() isDeleted = new EventEmitter<boolean>();

  delete() {
    this.isDeleted.emit(true);
  }

  cancel() {
    this.isDeleted.emit(false);
  }
}
