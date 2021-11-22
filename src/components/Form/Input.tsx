import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form'
// import { ErrorMessage } from '@hookform/error-message';

import { Input as ChakraInput, InputProps as ChakraInputProps, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900'
                }}
                size="lg"
                ref={ref}
                {...rest}
            />

            {!!error && (<FormErrorMessage>
                {error.message}
            </FormErrorMessage>)}

            {/* <ErrorMessage
                errors={error}
                name={name}
                render={({ message }) => <span>{message}</span>}
            /> */}

        </FormControl>
    )
}

export const Input = forwardRef(InputBase)