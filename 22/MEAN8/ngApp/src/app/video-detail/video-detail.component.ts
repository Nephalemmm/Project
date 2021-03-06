import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() public video:Video;
  @Output() updateVideoEvent = new EventEmitter();
  public editTitle:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.editTitle = false;
  }
  onTitleClick(){
    this.editTitle = true;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }

}
