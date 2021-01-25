import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { StoriesPopUpData } from "../general-interfaces/StoriesDialogData";
import { QuillModule } from "ngx-quill";

@Component({
  selector: "app-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.css"]
})
export class StoriesComponent implements OnInit {
  quillEditorRef;
  maxUploadFileSize = 1000000;
  constructor(
    public dialogRef: MatDialogRef<StoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StoriesPopUpData
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
  // imageHandler = (image, callback) => {
  //   const range = this.quillEditorRef.getSelection();
  //   const img =
  //     '<a href="https://image.flaticon.com/icons/png/128/126/126477.png" data-lightbox="image-1" data-title="My caption"> <div> <img src="https://image.flaticon.com/icons/png/128/126/126477.png" height="50"/> </div> </a>';
  //   this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
  // };
}
