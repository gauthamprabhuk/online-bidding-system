import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { BsModalRef,BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  isDivVisible: boolean = false; 
  straightBid: number | null = null;  
  straightmaxBid: number | null = null;  
  isSubmitted: boolean = false;
  isBidIncremented: boolean = false;

  @ViewChild('deleteTemplate') deleteTemplateModal!: any;
  deleteTemplateModalRef!: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }


  submitBid() {
      this.isSubmitted = true;
      setTimeout(() => {
        this.closedeleteFunction(); 
    }, 1000);
  }

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }

  deleteFunction(){
    this.deleteTemplateModalRef = this.modalService.show(
      this.deleteTemplateModal,
      Object.assign({ backdrop: "static", class: "small-modal"})
    );
  }
  closedeleteFunction(){
    this.deleteTemplateModalRef.hide();
  }

  incrementBid() {
    if (this.straightBid === null) {
      this.straightBid = 100;
    } else {
      this.straightBid += 100;
    }
  }

  incrementmaxBid() {
    if (this.straightmaxBid === null) {
      this.straightmaxBid = 265;
    } 
  }

  // Handle input changes (for manual typing)
  onInput(event: Event) {
    const input = (event.target as HTMLInputElement).value.replace('$', '').trim();
    const parsedValue = input ? parseInt(input, 10) : null;
  
    // Check if the parsed value is a valid number
    if (parsedValue !== null && !isNaN(parsedValue)) {
      this.straightBid = parsedValue;
    } else {
      this.straightBid = null;
    }
  }

  


}
