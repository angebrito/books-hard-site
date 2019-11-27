import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../service/livros.service';
import { Livro } from '../service/livro';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
  
})
export class LivrosComponent implements OnInit {



  constructor(
    private servicesLivros : LivrosService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
   

  }


   

  }


