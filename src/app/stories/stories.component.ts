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
  //NG-Quill editor refference
  quillEditorRef;

  //The HTML view uses buttons instead of tabs, because the buttons provided
  //better feedback for mobile interaction. The pannel selected is the variable
  //the buttons operate to show different pannels.
  pannelSelect: number = 1;

  //The Max file upload size arbitrary selected
  maxUploadFileSize = 1000000;

  constructor(
    public dialogRef: MatDialogRef<StoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StoriesPopUpData
  ) {}

  ngOnInit() {
    console.log("Data.name: ", this.data.name);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * <h1>Attach a custom handler to Quil text editor</h1>
   *
   * <p>Does: attaches a custom handler for the Image function</p>
   */
  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;

    //Printing here
    console.log(this.quillEditorRef);
    const toolbar = editorInstance.getModule("toolbar");
    toolbar.addHandler("image", this.imageHandler);
  }

  /**
   * <h1>Image handler for quil text editor</h1>
   *
   * <p>Does: provides a custom image handler for NG-Quil text editor</p>
   * <p>Needed Because: a limit hat to be placed on the size of the Quil text.
   * A value of 1 MB was selected at random to be the limit of the text.</p>
   *
   * <p>Global variables reffered</p>
   * <ol>
   * <li>maxUploadFileSize: The file size of 1 MB</li>
   * </ol>
   */
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
