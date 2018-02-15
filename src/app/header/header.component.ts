import { Component, Output,EventEmitter } from "@angular/core";
// import { EventEmitter } from "@angular/core/src/event_emitter";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);    
    }

}