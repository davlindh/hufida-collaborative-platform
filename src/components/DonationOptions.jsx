import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DonationOptions = ({ customAmount, setCustomAmount }) => {
  const donationOptions = [
    { amount: 10, label: "$10" },
    { amount: 25, label: "$25" },
    { amount: 50, label: "$50" },
    { amount: 100, label: "$100" },
  ];

  return (
    <Tabs defaultValue="one-time" className="w-full mb-12">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
        <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
      </TabsList>
      <TabsContent value="one-time">
        <Card>
          <CardHeader>
            <CardTitle>Make a One-time Donation</CardTitle>
            <CardDescription>Choose an amount or enter a custom value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {donationOptions.map((option) => (
                <Button
                  key={option.amount}
                  variant={customAmount === option.amount.toString() ? "default" : "outline"}
                  onClick={() => setCustomAmount(option.amount.toString())}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            <Input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="mb-4"
            />
            <Button className="w-full">Donate Now</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="monthly">
        <Card>
          <CardHeader>
            <CardTitle>Set Up Monthly Donation</CardTitle>
            <CardDescription>Choose a monthly contribution amount</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[5, 10, 25, 50].map((amount) => (
                <Button
                  key={amount}
                  variant={customAmount === amount.toString() ? "default" : "outline"}
                  onClick={() => setCustomAmount(amount.toString())}
                >
                  ${amount}/month
                </Button>
              ))}
            </div>
            <Input
              type="number"
              placeholder="Custom monthly amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="mb-4"
            />
            <Button className="w-full">Set Up Monthly Donation</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default DonationOptions;