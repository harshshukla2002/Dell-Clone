import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, TableCaption, Alert, AlertIcon, useDisclosure, Button } from "@chakra-ui/react";
import axios from "axios";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from "react";

function UsersDetails() {
    const [usersData, setUsersData] = useState([]);
    const [alert, setAlert] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    console.log("welcome")

    const FetchUsers = () => {
        console.log("funciton called")
        axios.get("https://636f1cdbbb9cf402c81008d8.mockapi.io/users")
            .then((res) => setUsersData(res.data))
            .catch((error) => console.log(error))
    }

    const handleDelete = (id) => {
        axios.delete(`https://636f1cdbbb9cf402c81008d8.mockapi.io/users/${id}`)
            .then(() => {
                FetchUsers();
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 5000)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        FetchUsers();
    }, [])

    return (
        <>
            {
                alert &&
                <div>
                    <Alert status='success' variant='subtle'>
                        <AlertIcon />
                        User Deleted
                    </Alert>
                </div>
            }
            <TableContainer className="table">
                <Table variant='striped' colorScheme="orange">
                    <TableCaption>Logged In Users Data</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>S. No.</Th>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Email</Th>
                            <Th>Password</Th>
                            <Th>Revoke Access</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            usersData?.map(item => {
                                return (
                                    <>
                                        <Tr>
                                            <Td>{item.id}</Td>
                                            <Td>{item.firstname}</Td>
                                            <Td>{item.lastname}</Td>
                                            <Td>{item.email}</Td>
                                            <Td>{item.password}</Td>
                                            <Td><Button colorScheme='red' onClick={onOpen}>
                                                Delete User
                                            </Button>

                                                <AlertDialog
                                                    isOpen={isOpen}
                                                    leastDestructiveRef={cancelRef}
                                                    onClose={onClose}
                                                >
                                                    <AlertDialogOverlay>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                                                Delete User
                                                            </AlertDialogHeader>

                                                            <AlertDialogBody>
                                                                Are you sure?
                                                            </AlertDialogBody>

                                                            <AlertDialogFooter>
                                                                <Button ref={cancelRef} onClick={onClose}>
                                                                    Cancel
                                                                </Button>
                                                                <Button colorScheme='red' onClick={() => {
                                                                    handleDelete(item.id)
                                                                    onClose()
                                                                }
                                                                } ml={3}>
                                                                    Delete
                                                                </Button>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialogOverlay>
                                                </AlertDialog></Td>
                                        </Tr>
                                    </>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )

}

export default UsersDetails;