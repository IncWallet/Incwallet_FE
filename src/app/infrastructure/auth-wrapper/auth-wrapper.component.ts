import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { SharedService } from '../_index';

@Component({
  selector: 'app-auth-wrapper',
  styleUrls: ['./auth-wrapper.component.scss'],
  templateUrl: './auth-wrapper.component.html',
})
export class AuthWrapperComponent implements OnInit, AfterViewInit {
  loading: boolean;

  constructor(private shareService: SharedService, private themeService: NbThemeService) {}

  ngOnInit(): void {
    this.onSpinnerChanged();
  }

  onSpinnerChanged() {
    this.shareService.onSpinnerChanged().subscribe((data) => {
      this.loading = data.loading;
    });
  }

  ngAfterViewInit(): void {
  }
}
