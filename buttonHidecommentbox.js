import { LightningElement,track } from 'lwc';

export default class ButtonHidecommentbox extends LightningElement {
    inputVal =true ;
    disableBtn=false;
    ischecked = false;
    @track showTextBox = false;
    @track showTextBoxCheckbox = false;
    @track textBoxValue = 'button click and level 2 done';
    @track textBoxValueCheckbox = 'Aman level 1 is done ';

    handleChange(event){
      if(event.target.checked){
        this.showTextBoxCheckbox = true;
        this.disableBtn = true;
      }else{
        this.disableBtn = false;
        
        this.showTextBoxCheckbox = false;
      }
    }
    handleCheckboxChange(event) {
        this.showTextBoxCheckbox = event.target.checked;
        
         // Hide the button textbox if it's shown
    }
    handleShowTextBox(event) {
        this.showTextBox =  event.target.checked;
         // Hide the checkbox textbox if it's shown
    }
}