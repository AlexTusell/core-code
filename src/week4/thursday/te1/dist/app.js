"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enquirer_1 = require("enquirer");
const getInput = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield (0, enquirer_1.prompt)({
        type: 'input',
        name: 'username',
        message: 'What is your UserName?'
    });
    return input;
});
const getForm = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield (0, enquirer_1.prompt)({
        type: 'form',
        name: 'info',
        message: 'Fill the form',
        choices: [
            { name: 'name', message: 'Name' },
            { name: 'lastname', message: 'Last Name' },
            { name: 'age', message: 'Age' },
        ]
    });
    return input;
});
const getSelect = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield (0, enquirer_1.prompt)({
        type: 'select',
        name: 'option',
        message: 'Select an option',
        choices: [
            { name: '1', message: '#1' },
            { name: '2', message: '#2' },
            { name: '3', message: '#3' },
        ]
    });
    return Number(input.option);
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('======= START =======');
    // let input = await getInput();
    // console.log(input.username);
    // let form = await getForm();
    // console.log(form.info.age);
    let select = yield getSelect();
    console.log(select);
});
start();
