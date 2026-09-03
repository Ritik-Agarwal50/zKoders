import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { BellRing, Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useStore } from '../store';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
type CardProps = React.ComponentProps<typeof Card>;
const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },

  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

function Qr({ className, ...props }: CardProps) {
  const [count, setCount] = useState(0);
  const { qr, setQr } = useStore();

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex flex-col align-center min-h-screenflex justify-center align-center min-h-screen">
      <Card className={cn('w-[380px]', className)} {...props}>
        <CardHeader>
          <CardTitle>Download QR</CardTitle>
          <CardDescription>Scan the code to verify.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex flex-col items-center space-x-4 rounded-md border p-4">
            <QRCode value={qr} size={250} level={'H'} />
          </div>
          <div>
            {/* {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))} */}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Download
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Qr;
