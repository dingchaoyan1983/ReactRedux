import $ from 'jquery';

class DropdownManager {
  constructor() {
    this.dropdowns = [];
  }

  registerDropdown(dropdown) {
    let dropdowns = this.dropdowns;
    dropdowns.push(dropdown);
  }

  unregisterDropdown(dropdown) {
    let dropdowns = this.dropdowns;
    let index = dropdowns.findIndex((item) => item === dropdown);
    dropdowns.splice(index,1);
  }

  close(dropdown={}) {
    let dropdowns = this.dropdowns;
    dropdowns.forEach((item) => {
      if(item !==dropdown) {
        item.setState({
          expanded: false
        });
      }
    });
  }
}

export default new DropdownManager();
