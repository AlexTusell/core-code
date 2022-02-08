import { prompt } from 'enquirer';

//input type
type Input = { username: string };

const getInput = async (): Promise<Input> => {
    const input: Input = await prompt({
        type: 'input',
        name: 'username',
        message: 'What is your UserName?'
    });
    return input;
}

//form type
type Form = { info: { name: string, lastname: string, age: string } };

const getForm = async (): Promise<Form> => {
    const input: Form = await prompt({
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
}

//select type
type Select = { option: string }
const getSelect = async (): Promise<number> =>  {
    const input: Select = await prompt({
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
}

const start = async () => {
    console.log('======= START =======');
    // let input = await getInput();
    // console.log(input.username);
    // let form = await getForm();
    // console.log(form.info.age);
    let select = await getSelect();
    console.log(select);
}

start();