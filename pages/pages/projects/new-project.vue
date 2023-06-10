<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="mx-auto col-lg-9 col-12">
                <div class="mt-4 card card-body">
                    <h6 class="mb-0">New Project</h6>
                    <p class="mb-0 text-sm">Create new project</p>
                    <hr class="my-3 horizontal dark" />
                    <label for="projectName" class="form-label">Project Name</label>
                    <input id="projectName" type="text" class="form-control" />
                    <div class="mt-4 row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label> Private Project </label>
                                <p class="text-xs form-text text-muted ms-1">
                                    If you are available for hire outside of the current
                                    situation, you can encourage others to hire you.
                                </p>
                                <div class="form-check form-switch ms-1">
                                    <input id="flexSwitchCheckDefault" class="form-check-input" type="checkbox"
                                        onclick="notify(this)" data-type="warning"
                                        data-content="Once a project is made private, you cannot revert it to a public project."
                                        data-title="Warning" data-icon="ni ni-bell-55" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label class="mt-4">Project Description</label>
                    <p class="text-xs form-text text-muted ms-1">
                        This is how others will learn about the project, so make it good!
                    </p>
                    <div id="editor">
                        <quill-editor   theme="snow" v-model:content="quillContent" contentType="html" />
                    </div>
                    <label class="mt-4 form-label">Project Tags</label>
                    <select id="choices-multiple-remove-button" class="form-control" name="choices-multiple-remove-button"
                        multiple>
                        <option value="Choice 1" selected>Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                        <option value="Choice 4">Choice 4</option>
                    </select>
                    <div class="row">
                        <div class="col-6">
                            <label class="form-label">Start Date</label>
                            <flat-pickr v-model="date" class="form-control datetimepicker"
                                placeholder="Please select start date" :config="config"></flat-pickr>
                        </div>
                        <div class="col-6">
                            <label class="form-label">End Date</label>
                            <flat-pickr v-model="endDate" class="form-control datetimepicker"
                                placeholder="Please select end date" :config="config"></flat-pickr>
                        </div>
                    </div>
                    <label class="mt-4 form-label">Starting Files</label>
                    <form id="dropzone" action="/file-upload" class="form-control dropzone">
                        <div class="fallback">
                            <input name="file" type="file" multiple />
                        </div>
                    </form>
                    <div class="mt-4 d-flex justify-content-end">
                        <button type="button" name="button" class="m-0 btn btn-light">
                            Cancel
                        </button>
                        <button type="button" name="button" class="m-0 btn bg-gradient-success ms-2">
                            Create Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import { Dropzone } from "dropzone";
import * as XLSX from 'xlsx';

import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
import Choices from "choices.js";

definePageMeta({
    layout: "default",
});

export default {
    components: { QuillEditor, flatPickr },
    data() {
        return {
            quillContent:
                "<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p>",
            date: "",
            endDate: "",
            config: {
                allowInput: true,
            },
            qustin: [],

        };
    },
    mounted() {

        const qustin = [];
        const element = document.getElementById("choices-multiple-remove-button");
        if (element) {
            const example = new Choices(element, {
                removeItemButton: true,
            });

            example.setChoices(
                [
                    {
                        value: "One",
                        label: "Label One",
                        disabled: true,
                    },
                    {
                        value: "Two",
                        label: "Label Two",
                        selected: true,
                    },
                    {
                        value: "Three",
                        label: "Label Three",
                    },
                ],
                "value",
                "label",
                false
            );
        }

        Dropzone.autoDiscover = false;
        if (document.getElementById("dropzone")) {
            const drop = document.getElementById("dropzone");
            // eslint-disable-next-line no-new
            new Dropzone(drop, {
                paramName: "file",
                acceptedFiles: '.doc, .docx, .pdf, .xls, .xlsx',
                url: "/file/post",
                addRemoveLinks: true,
                timeout: 90000, /*milliseconds*/

                accept: function (file, done) {

                    var reader = new FileReader();
                    reader.addEventListener("loadend", function (event) {
                        var data = event.target.result;
                        var workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        workbook.SheetNames.forEach(function (sheetName) {
                            // Here is your object
                            var XL_row_object = XLSX.utils.sheet_to_row_object_array(
                                workbook.Sheets[sheetName]
                            );
                            var json_object = JSON.stringify(XL_row_object);
                            var insatrQuastion = JSON.parse(json_object);
                            insatrQuastion.forEach(element => {
                                let insatrQuastion = {
                                    courses: element.courses,
                                    subject: element.subject,
                                    systems: element.systems,
                                    topic: element.topic,
                                    totalPoint: element.totalPoint,
                                    question: [{
                                        Answer1: element.Answer1,
                                        Answer2: element.Answer2,
                                        Answer3: element.Answer3,
                                        Answer4: element.Answer4,
                                        Answer5: element.Answer5,
                                        Answer6: element.Answer6,
                                        Answer7: element.Answer7,
                                        Answer8: element.Answer8,
                                        Answer: element.Answer,
                                        questiontext: element.questiontext,
                                        explanation: element.explanation,
                                    }]
                                }
                                qustin.push(insatrQuastion)
                            }
                            );
                            $fetch('https://walrus-app-b8h5f.ondigitalocean.app/question/insertMany', {
                                method: 'POST',
                                body: qustin
                            }).then(res => {
                                console.log(res);
                            })
                                .catch((error) => {
                                    console.log(error);
                                });
                        });
                    });
                    reader.readAsBinaryString(file);
                }
            });
        }
    },
    methods: {
        async inputqusizez(data) {
            data.forEach(element => {
                let insatrQuastion = {
                    courses: element.courses,
                    subject: element.subject,
                    systems: element.systems,
                    topic: element.topic,
                    totalPoint: element.totalPoint,
                    question: [{
                        Answer1: element.Answer1.trim(),
                        Answer2: element.Answer2.trim(),
                        Answer3: element.Answer3.trim(),
                        Answer4: element.Answer4.trim(),
                        Answer5: element.Answer5.trim(),
                        Answer6: element.Answer6.trim(),
                        Answer7: element.Answer7.trim(),
                        Answer8: element.Answer8.trim(),
                        Answer: element.Answer.trim(),
                        questiontext: element.questiontext,
                        explanation: element.explanation,
                    }]
                }
                this.insatrQuastion.push(insatrQuastion);


            });




        },
        onUploaded(e) {
            const { file } = e;
            const fileReader = new FileReader();
            fileReader.onload = () => {
                this.isDropZoneActive = false;
                this.imageSource = fileReader.result;
            };
            fileReader.readAsDataURL(file);
            this.textVisible = false;
            this.progressVisible = false;
            this.progressValue = 0;
        },
        getChoices(id) {
            const element = document.getElementById(id);
            if (document.getElementById(id)) {
                return new Choices(element, {
                    searchEnabled: false,
                    allowHTML: true,
                });
            }
        },
    },
};
</script>
