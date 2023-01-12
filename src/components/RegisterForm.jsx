import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Select from "react-select";

const RegisterForm = () => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur"
  });

  const selectOptions = [
    { value: "student", label: "Student" },
    { value: "developer", label: "Developer" },
    { value: "manager", label: "Manager" }
  ];

  const handleRegistration = (data) => console.log(data);

  const handleError = (errors) => {
    console.log(errors);
  };

  const registerOptions = {
    name: { required: true },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    },
    role: { required: "Role is required" }
  };

  return (
    <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <FormGroup>
        <Label>Name</Label>
        <Input name="name" innerRef={register(registerOptions.name)} />
        <small className="text-danger">
          {errors.name && errors.name.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          innerRef={register(registerOptions.email)}
        />
        <small className="text-danger">
          {errors.email && errors.email.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          innerRef={register(registerOptions.password)}
        />
        <small className="text-danger">
          {errors.password && errors.password.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Your Role</Label>
        <Controller
          name="role"
          control={control}
          as={Select}
          options={selectOptions}
          defaultValue=""
          rules={registerOptions.role}
        />
        <small className="text-danger">
          {errors.role && errors.role.message}
        </small>
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
};

export default RegisterForm;




// import React from "react";
// import { Form } from "reactstrap";
// import {useForm , Controller} from 'react-hook-form';
// import {  FormGroup, Label, Input, Button } from "reactstrap";
// import Select from "react-select";

// const RegisterForm=()=>{
//     const { register, handleSubmit , errors,control} = useForm({
//         mode: 'onBlur'
//     });

//     const selectOptions=[
//         {
//             value:'student',
//             label: 'Student'
//         },
//         {
//             value:'developer',
//             label: 'Developer'
//         },
//         {
//             value:'manager',
//             label: 'Manager'
//         }
//     ]

//     const handleRegistration = (data) => console.log(data);


//     const handleError=(errors) => console.log(errors);

//     const registerOptions={
//         name: { required: true },
//         email: { required: "Email is required" },
//         password: {required: "Password is required",
//         minLength: {
//                     value: 8,
//                     message: "Password must have at least 8 characters"
//                   }},
//                   role: { required: "Role is required" }
//     }
//     return (
//         <Form onSubmit={handleSubmit(handleRegistration,handleError)}>

//             <FormGroup>
//                 <Label>name</Label>
//                 <input name="name" innerRef={register(registerOptions.name)}/>
//                 <small className="text-danger">
//                     {errors.name && errors.name.message}
//                 </small>
//             </FormGroup>

//             <FormGroup>
//                 <Label>email</Label>
//                 <input  type="email "name="email" innerRef={register(registerOptions.email)}/>
//                 <small className="text-danger">
//                     {errors.email && errors.email.message}
//                 </small>
//             </FormGroup>


            
//             <FormGroup>
//                 <Label>password</Label>
//                 <input type="password" name="password" innerRef={register(registerOptions.password)}/>
//                 <small className="text-danger">
//                     {errors.password && errors.password.message}
//                 </small>
//             </FormGroup>

//             <FormGroup>
//                 <Label>your role</Label>
//                 <Controller   name="role" control={control} as={Select} options={selectOptions}
//                 defaultValue="" rules={registerOptions.role}>
                  
//                 </Controller>
               
//                 <small className="text-danger">
//                     {errors.role && errors.role.message}
//                 </small>
//             </FormGroup>
//             <Button color="primary"> submit</Button>





//         </Form>)       
//     }

   
//         export default RegisterForm;
        