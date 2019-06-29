import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Form, Field } from 'react-final-form';
import { Input, TextField, Checkbox, Radio, Select } from 'final-form-material-ui';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const PROGRAM_APPLY = gql`
  mutation programApply(
    $name: String!
    $studentID: String!
    $department: String!
    $phone: String!
    $mobile: String!
    $email: String!
    $address: String!
  ){
    programApply(
      name: $name
      studentID: $studentID
      department: $department
      phone: $phone
      mobile: $mobile
      email: $email
      address: $address
    ) {
      id
      name
      studentID
      department
      phone
      mobile
      email
      address
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const styles = {
  paper: {
    margin: '200px 0 0 0',
  },
  input: {
    width: '100%',
  },
}

const onSubmit = (data, update) => {
    console.log('programData', data)
    update({
      variables: {
        name: data.name,
        studentID: data.studentID,
        department: data.department,
        phone: data.phone,
        mobile: data.mobile,
        email: data.email,
        address: data.address,
      }
    })
  }

const validate = values => {
    const errors ={}
    if (!values.account) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  }


function FormPage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Container fixed>
        <Paper className={classes.root} style={styles.paper}>
          <Typography variant="h5" component="h3">
            後台介面
          </Typography>
          <ul>
            <li>發佈文章</li>
            <li>輪播圖排程</li>
          </ul>
        </Paper>
      </Container>
    </Fragment>
  )
}

export default FormPage;