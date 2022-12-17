import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../Button';
import { GrFormClose } from "react-icons/gr"
import React from "react";
import { Modal } from '../Modal';
import { Flex } from '../Flex';
import { Card } from '../card';
import { Box } from '../Box';
import { Heading } from '../Heading';
import { Badge } from '../badge';
import { HStack } from '../HStack';

interface IDialogModal {
    content: React.ReactElement,
    children: React.ReactNode,
    occurrence: string,
}

const typeBadge = {
    "REGISTRO CANCELADO": <Badge size="small" variant="filled" negative>Cancelado</Badge>,
    "REGISTRO ENCERRADO": <Badge size="small" variant="filled" negative>Encerrado</Badge>,
    "REGISTRO CONCLUÍDO": <Badge size="small" variant="filled" positive>Concluído</Badge>,
    "REGISTRO EFETUADO": <Badge size="small" variant="filled" positive>Efetuado</Badge>,
}

export const DialogModal = ({
    content,
    children,
    occurrence
}: IDialogModal
): React.ReactElement => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            { children }
        </Dialog.Trigger>
        <Modal>
            <Box>
                <Card
                    variant="modal"
                >
                    <Flex
                        align="center"
                        justify="space-between"
                    >
                        <HStack
                            align="center"
                            spacing="3"
                        >
                            <Heading
                                size="md"
                            >
                                Detalhes
                            </Heading>
                            { typeBadge[occurrence as keyof typeof typeBadge] }
                        </HStack>
                        <Dialog.Close asChild>
                            <Button
                                variant="text"
                                aria-label="Close"
                            >
                                <GrFormClose
                                    size={22}
                                    cursor="pointer"
                                />
                            </Button>
                        </Dialog.Close>
                    </Flex>
                    { content }
                </Card>
            </Box>
        </Modal>
    </Dialog.Root>
);