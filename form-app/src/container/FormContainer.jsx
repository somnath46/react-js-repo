import React from "react";

import Button from "../container/Button";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                name: "",
                age: "",
                gender: "",
                skills: [],
                about: ""
            },
            genderOptions: ["Male", "Female", "Others"],
            skillOptions: ["Programming", "Development", "Design", "Testing"] 
        }       
    }

    handleFullName(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              name: value
            }
          }),
          () => console.log(this.state.newUser)
        );
    }

    handleAge(e) {
        let value = e.target.value;
        this.state(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    age: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }
}