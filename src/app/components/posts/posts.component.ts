import { Component, OnInit } from '@angular/core';
import { DevPostsService } from 'src/app/services/dev-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts: Array<any> = [];
  public isLoaded: boolean;

  constructor(private postsService: DevPostsService) {}

  ngOnInit(): void {
    this.isLoaded = false;
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data.slice(0, 3);
      this.isLoaded = true;
    });
  }
}
