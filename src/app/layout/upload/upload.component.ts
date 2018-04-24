import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../router.animations";

@Component({
    selector: "app-upload",
    templateUrl: "./upload.component.html",
    styleUrls: ["./upload.component.scss"],
    animations: [routerTransition()]
})
export class UploadComponent implements OnInit {
    uploadStatus: string;

    constructor() {
        this.uploadStatus = "ยังไม่ได้เลือกไฟล์";
    }

    ngOnInit() {}
}
