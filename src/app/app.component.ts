import { Component, ViewChild } from '@angular/core';
import { MMLItemGroupDto } from './tree-view/tree-view.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TreeView';
  CMLItemGroups:MMLItemGroupDto[]=[];
  selectedNode: MMLItemGroupDto =new MMLItemGroupDto();
  @ViewChild('f') Form!: NgForm;
  ngOnInit(): void {
    this.CMLItemGroups = [
      {
        groupCode: "1",
        parentMMItemGroupId: null,
        localeMMItemGroupName: "ميكانيكا",
        latinMMItemGroupName: "ميكانيكا",
        mmItemGroupTreeLevel: 0,
        id: 75,
        name: "ميكانيكا",
        childs: [
          {
            groupCode: "101",
            parentMMItemGroupId: 75,
            localeMMItemGroupName: "موتور",
            latinMMItemGroupName: "Engine",
            mmItemGroupTreeLevel: 1,
            id: 76,
            name: "موتور",
            childs: [
              {
                groupCode: "1011",
                parentMMItemGroupId: 76,
                localeMMItemGroupName: "طقم اصلاح",
                latinMMItemGroupName: "طقم اصلاح",
                mmItemGroupTreeLevel: 2,
                id: 77,
                name: "طقم اصلاح",
                childs: []
              },
              {
                groupCode: "1012",
                parentMMItemGroupId: 76,
                localeMMItemGroupName: "طقم بوجيهات",
                latinMMItemGroupName: "طقم بوجيهات",
                mmItemGroupTreeLevel: 2,
                id: 78,
                name: "طقم بوجيهات",
                childs: []
              },
              {
                groupCode: "1013",
                parentMMItemGroupId: 76,
                localeMMItemGroupName: "سيور",
                latinMMItemGroupName: "سيور",
                mmItemGroupTreeLevel: 2,
                id: 79,
                name: "سيور",
                childs: []
              }
            ]
          },
          {
            groupCode: "102",
            parentMMItemGroupId: 75,
            localeMMItemGroupName: "فتيس والات جر",
            latinMMItemGroupName: "Transmission",
            mmItemGroupTreeLevel: 1,
            id: 80,
            name: "فتيس والات جر",
            childs: [
              {
                groupCode: "1021",
                parentMMItemGroupId: 80,
                localeMMItemGroupName: "طقم اصلاح فتيس",
                latinMMItemGroupName: "طقم اصلاح فتيس",
                mmItemGroupTreeLevel: 2,
                id: 81,
                name: "طقم اصلاح فتيس",
                childs: []
              },
              {
                groupCode: "1022",
                parentMMItemGroupId: 80,
                localeMMItemGroupName: "طقم كبالين",
                latinMMItemGroupName: "طقم كبالين",
                mmItemGroupTreeLevel: 2,
                id: 82,
                name: "طقم كبالين",
                childs: []
              }
            ]
          },
          {
            groupCode: "103",
            parentMMItemGroupId: 75,
            localeMMItemGroupName: "عفشة",
            latinMMItemGroupName: "Driving System",
            mmItemGroupTreeLevel: 1,
            id: 83,
            name: "عفشة",
            childs: [
              {
                groupCode: "1031",
                parentMMItemGroupId: 83,
                localeMMItemGroupName: "المساعدين",
                latinMMItemGroupName: "المساعدين",
                mmItemGroupTreeLevel: 2,
                id: 84,
                name: "المساعدين",
                childs: []
              },
              {
                groupCode: "1032",
                parentMMItemGroupId: 83,
                localeMMItemGroupName: "مقصات وجلب",
                latinMMItemGroupName: "مقصات وجلب",
                mmItemGroupTreeLevel: 2,
                id: 85,
                name: "مقصات وجلب",
                childs: []
              },
              {
                groupCode: "1033",
                parentMMItemGroupId: 83,
                localeMMItemGroupName: "صرة ورمان بلي",
                latinMMItemGroupName: "صرة ورمان بلي",
                mmItemGroupTreeLevel: 2,
                id: 86,
                name: "صرة ورمان بلي",
                childs: []
              }
            ]
          },
          {
            groupCode: "104",
            parentMMItemGroupId: 75,
            localeMMItemGroupName: "فرامل بمشتملاتها",
            latinMMItemGroupName: "Breaking",
            mmItemGroupTreeLevel: 1,
            id: 87,
            name: "فرامل بمشتملاتها",
            childs: [
              {
                groupCode: "1041",
                parentMMItemGroupId: 87,
                localeMMItemGroupName: "ماستر فرامل",
                latinMMItemGroupName: "ماستر فرامل",
                mmItemGroupTreeLevel: 2,
                id: 88,
                name: "ماستر فرامل",
                childs: []
              },
              {
                groupCode: "1042",
                parentMMItemGroupId: 87,
                localeMMItemGroupName: "تيل امامي",
                latinMMItemGroupName: "تيل امامي",
                mmItemGroupTreeLevel: 2,
                id: 89,
                name: "تيل امامي",
                childs: []
              },
              {
                groupCode: "1043",
                parentMMItemGroupId: 87,
                localeMMItemGroupName: "تيل خلفي",
                latinMMItemGroupName: "تيل خلفي",
                mmItemGroupTreeLevel: 2,
                id: 90,
                name: "تيل خلفي",
                childs: []
              }
            ]
          },
          {
            groupCode: "105",
            parentMMItemGroupId: 75,
            localeMMItemGroupName: "نظام التوجيه",
            latinMMItemGroupName: "Steering",
            mmItemGroupTreeLevel: 1,
            id: 91,
            name: "نظام التوجيه",
            childs: [
              {
                groupCode: "1051",
                parentMMItemGroupId: 91,
                localeMMItemGroupName: "طلمبنة باور",
                latinMMItemGroupName: "طلمبنة باور",
                mmItemGroupTreeLevel: 2,
                id: 92,
                name: "طلمبنة باور",
                childs: []
              },
              {
                groupCode: "1052",
                parentMMItemGroupId: 91,
                localeMMItemGroupName: "علبة دركسيون",
                latinMMItemGroupName: "علبة دركسيون",
                mmItemGroupTreeLevel: 2,
                id: 93,
                name: "علبة دركسيون",
                childs: []
              },
              {
                groupCode: "1053",
                parentMMItemGroupId: 91,
                localeMMItemGroupName: "تيش و ميزان",
                latinMMItemGroupName: "تيش و ميزان",
                mmItemGroupTreeLevel: 2,
                id: 94,
                name: "تيش و ميزان",
                childs: []
              }
            ]
          }
        ]
      },
      {
        groupCode: "2",
        parentMMItemGroupId: null,
        localeMMItemGroupName: "كهرباء المركبة",
        latinMMItemGroupName: "Electricity",
        mmItemGroupTreeLevel: 0,
        id: 95,
        name: "كهرباء المركبة",
        childs: [
          {
            groupCode: "201",
            parentMMItemGroupId: 95,
            localeMMItemGroupName: "أضواء وانارة",
            latinMMItemGroupName: "أضواء وانارة",
            mmItemGroupTreeLevel: 1,
            id: 96,
            name: "أضواء وانارة",
            childs: [
              {
                groupCode: "2011",
                parentMMItemGroupId: 96,
                localeMMItemGroupName: "كشافات امامية",
                latinMMItemGroupName: "كشافات امامية",
                mmItemGroupTreeLevel: 2,
                id: 97,
                name: "كشافات امامية",
                childs: []
              },
              {
                groupCode: "2012",
                parentMMItemGroupId: 96,
                localeMMItemGroupName: "فوانيس داخلية",
                latinMMItemGroupName: "فوانيس داخلية",
                mmItemGroupTreeLevel: 2,
                id: 98,
                name: "فوانيس داخلية",
                childs: []
              },
              {
                groupCode: "2013",
                parentMMItemGroupId: 96,
                localeMMItemGroupName: "إضادة الصالون",
                latinMMItemGroupName: "إضادة الصالون",
                mmItemGroupTreeLevel: 2,
                id: 99,
                name: "إضادة الصالون",
                childs: []
              }
            ]
          }
        ]
      },
      {
        groupCode: "3",
        parentMMItemGroupId: null,
        localeMMItemGroupName: "التبريد",
        latinMMItemGroupName: "Cooling System",
        mmItemGroupTreeLevel: 2,
        id: 100,
        name: "التبريد",
        childs: [
          {
            groupCode: "301",
            parentMMItemGroupId: 100,
            localeMMItemGroupName: "ردياتير",
            latinMMItemGroupName: "ردياتير",
            mmItemGroupTreeLevel: 3,
            id: 101,
            name: "ردياتير",
            childs: []
          }
        ]
      }
    ];
}

submit(){
  console.log(this.Form.value)
}
}
