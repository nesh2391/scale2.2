import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DefectsObject } from "../general-interfaces/defects-object";
import { QuillModule } from "ngx-quill";

@Component({
  selector: "app-defect",
  templateUrl: "./defect.component.html",
  styleUrls: ["./defect.component.css"]
})
export class DefectComponent implements OnInit {
  quillEditorRef;
  pannelSelect: number = 1;
  maxUploadFileSize = 1000000;
  storyName;
  featureName;
  critical;
  constructor(
    public dialogRef: MatDialogRef<DefectsObject>,
    @Inject(MAT_DIALOG_DATA) public defect: DefectsObject
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;

    //Printing here
    console.log(this.quillEditorRef);
    const toolbar = editorInstance.getModule("toolbar");
    toolbar.addHandler("image", this.imageHandler);
  }

  imageHandler = (image, callback) => {
    const input = <HTMLInputElement>document.getElementById("fileInputField");
    document.getElementById("fileInputField").onchange = () => {
      let file: File;
      file = input.files[0];
      // file type is only image.
      if (/^image\//.test(file.type)) {
        if (file.size > this.maxUploadFileSize) {
          alert("Image needs to be less than 1MB");
        } else {
          const reader = new FileReader();
          reader.onload = () => {
            const range = this.quillEditorRef.getSelection();
            const img = '<img src="' + reader.result + '" />';
            this.quillEditorRef.clipboard.dangerouslyPasteHTML(
              range.index,
              img
            );
          };
          reader.readAsDataURL(file);
        }
      } else {
        alert("You could only upload images.");
      }
    };

    input.click();
  };
}
