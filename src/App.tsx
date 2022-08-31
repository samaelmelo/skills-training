import {Box, Center, Flex, FormControl, Heading, SimpleGrid, Text, FormLabel, Input, FormHelperText, Button, VStack, useBreakpointValue} from "@chakra-ui/react";
import {useForm, SubmitHandler} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const require = 'Campo obrigatório!'

const schemaValidation = Yup.object().shape({
  firstName: Yup.string().required(require),
  lastName: Yup.string().required(require),
  email: Yup.string().email('Formato de email inválido.').required(require),
  password: Yup.string().required(require),

})



function App() {

  const isWideVersion = useBreakpointValue({
    base: 'center',
    sm: 'flex-start'
  }) as string;

  const alignText = useBreakpointValue({
    base: true,
    sm: false
  })
  
    interface IValues {
      firstName: string,
      lastName: string,
      email: string,
      password: string,
    }

  const {register, handleSubmit, watch, formState: { errors}} = useForm<IValues>({
    resolver: yupResolver(schemaValidation)
  })

  const handleSubmitValues: SubmitHandler<IValues> = (values) => {
    console.log(values)
  }

  return (
    <Flex w='100%' h='100vh' justify='center' backgroundImage={'url("./src/assets/bg-intro-desktop.png")'} backgroundSize={'cover'} backgroundRepeat='no-repeat' direction='column' paddingInline={['2rem','3rem','5rem','7rem','10rem']}>
     <SimpleGrid minChildWidth='20rem' spacing='40px'>
      <Flex flex='1' direction='column' gap='1rem' justify='center' align={isWideVersion} >
          <Heading as='h1'> Learn to code by <br/> watching others</Heading>
          <Text wordBreak='normal' lineHeight='1.7rem' textAlign={alignText ? 'center' : 'left'}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but undertanding how developers thinl is invaluable. </Text>
      </Flex>
      <Flex flex='1' direction='column' gap='1.5rem'>
        <Center h='3.5rem' bg='purple.700' borderRadius='0.5rem' boxShadow={'0px 6px 0px rgba(0,0,0,0.2)'} p='1rem'> 
          <Text as='p' fontSize={['_', '.9rem', '1rem', '1rem']}>
          <strong>Try it free ? days</strong> then $20/mo. thereafter
          </Text>
        </Center>
          <Flex
          as='form'
          onSubmit={handleSubmit(handleSubmitValues)}
          direction='column' bg='white' p={['2rem 2rem ','2rem 2rem ','2rem 2rem ','2rem 3rem']} 
          borderRadius='0.5rem' boxShadow={'0px 7px 0px rgba(0,0,0,0.2)'} >
            <FormControl>
              <VStack spacing='4' color='black'>

                <Input 
                  id='firstName'
                  type='text' 
                  placeholder="First Name" 
                  p='1.5rem' 
                  _placeholder={{
                    color: "gray.400"
                  }} 
                  {...register('firstName')}
                  />
                  {errors && (
                    <small style={{width: '100%', marginTop:'5px', textAlign: 'left', color: 'red' }}>{errors.firstName?.message}</small>
                  )}
                <Input 
                  id='lastName'
                  type='text' 
                  placeholder="Last Name" 
                  p='1.5rem' 
                  _placeholder={{
                    color: "gray.400"
                  }} 
                  {...register('lastName')}
                  />
                  {errors && (
                    <small style={{width: '100%', marginTop:'5px', textAlign:'left', color: 'red' }}>{errors.lastName?.message}</small>
                  )}
                <Input 
                  id='email'
                  type='email' 
                  placeholder="Email Address" 
                  p='1.5rem' 
                  _placeholder={{
                    color: "gray.400"
                  }} 
                  {...register('email')}
                  />
                   {errors && (
                    <small style={{width: '100%', marginTop:'5px', textAlign:'left', color: 'red' }}>{errors.email?.message}</small>
                  )}
                <Input 
                  id='password'
                  type='password' 
                  placeholder="Password" 
                  p='1.5rem' 
                  _placeholder={{
                    color: "gray.400"
                  }} 
                  {...register('password')}
                />
                 {errors && (
                    <small style={{width: '100%', marginTop:'5px', textAlign:'left', color: 'red' }}>{errors.password?.message}</small>
                  )}
                <Button type='submit' w='100%' p='2rem' bg='green'color='#fff'>CLAIM YOUR FREE TRIAL</Button>
              </VStack>
              
            </FormControl>

            <Text mt='1rem' textAlign='center' as='small' color='gray.400'>By clicking the button, you are agreeing to our <strong style={{color:'red'}}>Terms and Services</strong></Text>
          </Flex>

        
      </Flex>
    </SimpleGrid>
    </Flex>
  )
}

export default App
