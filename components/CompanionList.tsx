import React from 'react'
import { cn, getSubjectColor } from "@/lib/utils"

import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link';
import Image from 'next/image';

interface CompanionListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionList = ({  companions, classNames }: CompanionListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2 className='font-bold text-3xl'>Recent Sessions</h2>

            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg">Subject</TableHead>
                        <TableHead className="text-lg">Duration</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map(({ id, name, topic, subject, duration,  }) => (
                        <TableRow key={id}>
                            <TableCell>
                                <Link href={`/companions/${id}`}>
                                    <div className="flex items-center gap-2">
                                        <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(subject) }}>
                                            <Image
                                                src={`/icons/${subject}.svg`}
                                                alt={subject}
                                                width={32}
                                                height={32}
                                            />
                                        </div>


                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold text-xl">{name}</p>

                                            <p className="text-md">{topic}</p>
                                        </div>

                                    </div>
                                </Link>
                            </TableCell>




                            <TableCell>
                                <div className='subject-badge w-fit max-md:hidden'>{subject}</div>

                                <div className=' flex items-center justify-center rounded-lg w-fit p-2 md:hidden' style = {{backgroundColor: getSubjectColor(subject)}}>
                                    <Image
                                        src={`/icons/${subject}.svg`}
                                        alt={subject}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </TableCell>

                            <TableCell>
                                <div className="flex items-center gap-2 w-full justify-end">
                                    <p className="text-xl">{duration} {' '}
                                        <span className='max-md:hidden'>mins</span>
                                    </p>
                                    <Image
                                        src="/icons/clock.svg"
                                        alt="clock"
                                        width={16}
                                        height={16}/>
                                </div>
                            </TableCell>

                        </TableRow>
                    ))}



                </TableBody>
            </Table>
        </article>
    )
}

export default CompanionList