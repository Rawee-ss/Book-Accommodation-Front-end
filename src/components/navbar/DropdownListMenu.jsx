import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignLeft } from 'lucide-react';
import UserIcon from './UserIcon';
import { Button } from '../ui/button';
import { links } from '@/utils/Links';
import { Link } from 'react-router';

function DropdownListMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                <Button variant="Outline">
                    <AlignLeft />
                    <UserIcon />
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {
                    links.map((item, index) => {
                        return (
                            <DropdownMenuItem key={index}>
                                <Link to={item.href}>
                                    {item.label}
                                </Link>
                            </DropdownMenuItem>)
                    })
                }

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownListMenu