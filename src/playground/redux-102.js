import {createStore, combineReducers} from 'redux';

const demo = {
    classes: [{
        name: '1A',
        pupils: 20,
        orientation: 'RIM'
    }],
    teachers: [{
        fullname: 'Elena Iw',
        subject: 'Math'
    }],
    director: {
        fullname: 'Beatrice Kek'
    }
}

// class action generators
const createClass = ({name = '1A', pupils = 0, orientation = 'AFM'} = {}) => ({
    type: 'CREATE_CLASS',
    newClass: {
        name,
        pupils,
        orientation
    }
});

const addTeacher = ({fullname, subject = 'Math'}) => ({
    type: 'ADD_TEACHER',
    newTeacher: {
        fullname,
        subject
    } 
});

const changeDirector = fullname => ({
    type: 'CHANGE_DIRECTOR',
    fullname
})
// reducers
const classReducer = (state = [], action) => {
    const checkClassExistense = ({name}) => {
        let previousName = '';
        state.forEach(schoolClass => {
            if(schoolClass.name === name) {
                // change the name of the class if there is already the same one
                name = name.slice(0, 1) + String.fromCharCode(name.charCodeAt(1) + 1);
            } else {
                previousName = schoolClass.name;
            }
        })

        return {...action.newClass, name};
    }
    switch(action.type) {
        case 'CREATE_CLASS':
           return [...state, checkClassExistense(action.newClass)];
        default:
          return state;
    }
};

const teacherReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TEACHER':
          return [...state, action.newTeacher];
        default:
          return state;
    }
};

const directorReducer = (state = {fullname: 'Beatrice Kek'}, action) => {
    switch(action.type) {
        case 'CHANGE_DIRECTOR':
          return {fullname: action.fullname};
        default:
          return state;
    }
};

const store = createStore(combineReducers({
    classes: classReducer,
    teachers: teacherReducer,
    director: directorReducer
}));

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(createClass({name: '1A'}));
store.dispatch(createClass({name: '1A'}));
store.dispatch(addTeacher({fullname: 'Elisa Kostansa', subject: 'English'}));
store.dispatch(changeDirector('Nathan Collins'));
