export interface FlashMessageModel {
  title: string;
  text: string;
  class: 'info' | 'success' | 'warning' | 'alert';
  active: boolean;
  timeout: 1000 | 2000 | 3000 | 5000 | 8000 | 13000;
}
