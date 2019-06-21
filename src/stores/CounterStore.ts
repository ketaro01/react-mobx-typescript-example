import {observable, action} from 'mobx';


export class CounterStore {
  public root: object;
  @observable number = 1;

  constructor(root: any){
    this.root = root;
  }

  @action increase = () => {
    this.number++;
  };

  @action decrease = () => {
    this.number--;
  };

}