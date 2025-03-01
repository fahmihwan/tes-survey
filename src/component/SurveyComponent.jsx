import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";

// import { json } from "./json";

function SurveyComponent() {
    const survey = new Model({
        "title": "Statistik Produktivitas Padi",
        "logoPosition": "right",
        "pages": [
            {
                "name": "page1",
                "title": "Informasi Lokasi",
                "elements": [
                    {
                        "type": "panel",
                        "name": "panel1",
                        "elements": [
                            {
                                "type": "text",
                                "name": "10001",
                                "title": "Nama Desa/ Kelurahan",
                                "isRequired": true
                            },
                            {
                                "type": "comment",
                                "name": "10002",
                                "title": "Alamat Lengkap",
                                "isRequired": true
                            },
                        ]
                    }
                ]
            },
            // {
            //     "name": "page2",
            //     "title": "Statistik Luas Lahan",
            //     "elements": [
            //         {
            //             "type": "panel",
            //             "name": "question15",
            //             "title": "\n",
            //             "elements": [
            //                 {
            //                     "type": "text",
            //                     "name": "question9",
            //                     "title": "Total luas lahan padi dalam satuan hektar (ha)",
            //                     "isRequired": true
            //                 },
            //                 {
            //                     "type": "text",
            //                     "name": "question16",
            //                     "title": "Total hasil  panen dalam kuintal (100 kg)",
            //                     "isRequired": true
            //                 },
            //                 {
            //                     "type": "text",
            //                     "name": "question17",
            //                     "title": "Rata-rata hasil panen per hektar dalam kuintal (kuintal/ha)",
            //                     "isRequired": true
            //                 },
            //                 {
            //                     "type": "dropdown",
            //                     "name": "Faktor",
            //                     "title": "Faktor yang mempengaruhi produktivitas",
            //                     "isRequired": true,
            //                     "choices": [
            //                         {
            //                             "value": "Item 1",
            //                             "text": "Kualitas Benih"
            //                         },
            //                         {
            //                             "value": "Item 2",
            //                             "text": "Penggunaan Pupuk"
            //                         },
            //                         {
            //                             "value": "Item 3",
            //                             "text": "Kondisi Irigasi"
            //                         },
            //                         {
            //                             "value": "Item 4",
            //                             "text": "Serangan Hama/Penyakit"
            //                         },
            //                         {
            //                             "value": "Item 5",
            //                             "text": "Perubahan Cuaca"
            //                         }
            //                     ],
            //                     "showOtherItem": true,
            //                     "otherText": "Lainnya"
            //                 },
            //                 {
            //                     "type": "radiogroup",
            //                     "name": "perbandingan produktivitas",
            //                     "title": "Apakah ada peningkatan atau penurunan  produktivitas dibanding tahun sebelumnya?",
            //                     "isRequired": true,
            //                     "choices": [
            //                         {
            //                             "value": "ya",
            //                             "text": "Ya"
            //                         },
            //                         {
            //                             "value": "tidak",
            //                             "text": "Tidak"
            //                         }
            //                     ],
            //                     "separateSpecialChoices": true
            //                 },
            //                 {
            //                     "type": "multipletext",
            //                     "name": "ya",
            //                     "visibleIf": "{perbandingan produktivitas} = 'ya'",
            //                     "title": "Jika pilih Ya (kuintal/ha)",
            //                     "isRequired": true,
            //                     "items": [
            //                         {
            //                             "name": "text1",
            //                             "title": "Meningkat sebanyak"
            //                         },
            //                         {
            //                             "name": "text2",
            //                             "title": "Menurun Sebanyak"
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     "type": "radiogroup",
            //                     "name": "question10",
            //                     "title": "Jika ada perubahan, apa penyebabnya?",
            //                     "isRequired": true,
            //                     "choices": [
            //                         {
            //                             "value": "Item 1",
            //                             "text": "Perbaikan teknik pertanian"
            //                         },
            //                         {
            //                             "value": "Item 2",
            //                             "text": "Penggunaan pupuk dan pestisida yang lebih baik"
            //                         },
            //                         {
            //                             "value": "Item 3",
            //                             "text": "Cuaca yang lebih mendukung"
            //                         }
            //                     ],
            //                     "showOtherItem": true,
            //                     "otherText": "Faktor lainnya"
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     "name": "page3",
            //     "title": "Tanggal Pengisian Survey",
            //     "elements": [
            //         {
            //             "type": "text",
            //             "name": "question14",
            //             "title": "Tanggal dan Waktu Pengisian",
            //             "inputType": "datetime-local"
            //         }
            //     ]
            // }
        ]
    });
    survey.applyTheme(SurveyTheme.DefaultDark);
    survey.onComplete.add((sender, options) => {
        console.log(sender.data);
        // console.log(JSON.stringify(sender.data, null, 3));
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;