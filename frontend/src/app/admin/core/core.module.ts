import { NgModule, Optional, SkipSelf,ModuleWithProviders } from '@angular/core';
//import { CoreModule as MainCoreModule} from '../../core/core.module';
import { AppraisalService } from './_services/appraisal.service';
import { AppraisalTypeService } from './_services/appraisal-type.service';
import { AreaService } from './_services/area.service';
import { CourseService } from './_services/course.service';
import { PersonalityService } from './_services/personality.service';
import { ProfessionService } from './_services/profession.service';
import { QuestionRuleService } from './_services/question-rule.service';
import { QuestionService } from './_services/question.service';
import { StudentService } from './_services/student.service';
import { UniversityService } from './_services/university.service';
//import { CommonModule }      from '@angular/common';

@NgModule({
  imports: [
  ],
  exports: [
  ],
  declarations: [],
  providers: [
    AppraisalService,
    AppraisalTypeService,
    AreaService,
    CourseService,
    PersonalityService,
    ProfessionService,
    QuestionRuleService,
    QuestionService,
    StudentService,
    UniversityService
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        //{provide: AppraisalTypeService, useValue: null}
      ]
    };
  }
}
