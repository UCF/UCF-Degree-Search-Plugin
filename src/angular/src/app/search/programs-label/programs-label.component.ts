import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-programs-label",
  templateUrl: "./programs-label.component.html",
  styleUrls: ["./programs-label.component.scss"],
})
export class ProgramsLabelComponent implements OnInit {
  @Input() degreeType: string = "";

  constructor() {}

  ngOnInit(): void {}

  getProgamClass(programType: string): string {
    if (programType === "bachelor"
      || programType === "undergraduate-program"
      || programType === "minor"
      || programType === "undergraduate-certificate") {
      return "fa fa-bookmark fa-2x text-primary";
    } else if (programType === "doctorate"
    || programType === "master"
    || programType === "graduate-certificate"
    || programType === "graduate-program") {
      return "fa fa-bookmark fa-2x text-danger";
    } else {
      return "fa fa-bookmark fa-2x text-complementary";
    }
  }

  getProgramType(programType: string) {
    switch (programType) {
      case "bachelor":
        return "B";
      case "minor":
        return "MN";
      case "undergraduate-certificate":
        return "UC";
      case "doctorate":
        return "D";
      case "graduate-certificate":
        return "GC";
      case "master":
        return "M";
      case "graduate-program":
        return "M";
      case "professional-program":
        return "D";
      default:
        return "";
    }
  }
}
