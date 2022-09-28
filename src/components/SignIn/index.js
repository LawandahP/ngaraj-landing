import React from 'react'
import { Container, Icon, Form, FormButton, 
        FormContent, FormH1, FormInput, FormLabel,
        FormWrapper } 
from './SignInElements'

const SignInPage = () => {
    return (
        <>
            <Container>
                <FormWrapper>
                    <Icon to="/">ngaraJ</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign In</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>

                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>

                            <FormButton type='submit'>Submit</FormButton>
                        </Form>
                    </FormContent>
                </FormWrapper>
            </Container>
        </>
    )
}

export default SignInPage