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
      return "bg-complementary";
    } else if (programType === "professional-program") {
      return "bg-primary";
    } else {
      return "bg-info";
    }
  }

  getProgramType(programType: string) {
    switch (programType) {
      case "bachelor":
        return "B";
      case "undergraduate-program":
        return "B";
      case "minor":
        return "MN";
      case "undergraduate-certificate":
        return "UC";
      case "doctorate":
        return "DR";
      case "graduate-certificate":
        return "GC";
      case "master":
        return "M";
      case "graduate-program":
        return "M";
      case "professional-program":
        return "MD";
      default:
        return "";
    }
  }
}
