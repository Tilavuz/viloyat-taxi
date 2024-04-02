"use client"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { format } from "date-fns";

// Places
import { places } from "@/helper/places";

// Icons
import {
  CircleUser,
  User,
  FileSpreadsheet,
  LogOut,
  BookPlus,
  Sun,
  Moon,
  CalendarDays
} from "lucide-react";


// Shadcn content
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@radix-ui/react-select";


// User interface
interface User {
  _id: string;
  chatId: number;
  name: string;
  phone: string;
  driver: boolean;
  carName: string;
  carNumber: string;
  admin: boolean;
}


export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>()

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    if (isToken) {
      setToken(isToken);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    }
  }, [token]);

  return (
    <div className="yp-24">
      <div className="ycontainer">
        <Tabs defaultValue="information" className="yflex yborder-2">
          <div className="yflex yflex-col yborder-r-2 ypy-8 ypx-16 ymin-h-[800px] yjustify-between">
            <div className="yflex yitems-center ygap-1">
              <CircleUser size={48} />
              <div className="yflex yflex-col">
                <p className="yfont-bold ytext-xl">{user?.name}</p>
                <p className="ytext-sm">
                  {user?.driver ? "Haydovchi" : "Yo'lovchi"}
                </p>
              </div>
            </div>
            <TabsList className="yflex yflex-col yh-[80px]">
              <TabsTrigger
                value="information"
                className="yw-full"
              >
                <User />
                <span className="ytext-left yw-full yfont-bold yml-1">Malumotlarim</span>
              </TabsTrigger>
              <TabsTrigger
                value="announcements"
                className="ytext-start yw-full"
              >
                <FileSpreadsheet />
                <span className="ytext-left yw-full yfont-bold yml-1">E'lonlarim</span>
              </TabsTrigger>
            </TabsList>
            <Button variant="outline">
              <span className="yfont-bold ymr-2">Chiqish</span>
              <LogOut size={18} />
            </Button>
          </div>
          <div className="yw-full">
            <TabsContent value="information">
              <Card className="yborder-0 yshadow-none">
                <CardHeader>
                  <CardTitle>Malumotlar</CardTitle>
                  <CardDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="yflex yflex-col ygap-4">
                    <li className="yflex yjustify-between yborder-b-2">
                      <span className="yfont-bold ytext-xl">Ism:</span>
                      <span className="ytext-xl">{user?.name}</span>
                    </li>
                    <li className="yflex yjustify-between yborder-b-2">
                      <span className="yfont-bold ytext-xl">Telefon:</span>
                      <span className="ytext-xl">+{user?.phone}</span>
                    </li>
                    <li className="yflex yjustify-between yborder-b-2">
                      <span className="yfont-bold ytext-xl">Roli:</span>
                      <span className="ytext-xl">
                        {user?.driver ? "Haydovchi" : "Yo'lovchi"}
                      </span>
                    </li>
                    {user?.driver && (
                      <>
                        <li className="yflex yjustify-between yborder-b-2">
                          <span className="yfont-bold ytext-xl">
                            Mashina nomi:
                          </span>
                          <span className="ytext-xl">{user?.carName}</span>
                        </li>
                        <li className="yflex yjustify-between yborder-b-2">
                          <span className="yfont-bold ytext-xl">
                            Mashina raqami:
                          </span>
                          <span className="ytext-xl">{user?.carNumber}</span>
                        </li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="announcements" className="yp-4">
              <div className="yflex yitems-center yjustify-between">
                <h4 className="ytext-2xl yfont-bold">Elonlarim</h4>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <BookPlus size={18} />
                      <span className="yfont-bold yml-2">Elon qo'shish</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>E'lon qo'shish</DialogTitle>
                      <DialogDescription>E'lon qo'shayotganda masulyatni xis qiling iltimos!</DialogDescription>
                    </DialogHeader>
                    <div className="yflex yflex-col ygap-2">
                      <Label htmlFor="comment">
                        <span className="yfont-bold">Izoh qo'shish:</span>
                      </Label>
                      <Input id="comment" placeholder="Ketish joyi: max-25" maxLength={25}/>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Qayirdan"/>
                        </SelectTrigger>
                        <SelectContent>
                          <ScrollArea className="yh-[180px]">
                           {
                            places.map((place, i) => {
                              return (
                                <div  key={i}>
                                  <SelectGroup>
                                    <SelectLabel>{place.label}</SelectLabel>
                                      {
                                        place.items.map((item, i) => {
                                          return <SelectItem key={i} value={item.value}>{item.label}</SelectItem>
                                        })
                                      }
                                  </SelectGroup>
                                  <Separator className="ym-2 yborder"/>
                                </div>
                              )
                            })
                           }
                          </ScrollArea>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Qayirga"/>
                        </SelectTrigger>
                        <SelectContent>
                          <ScrollArea className="yh-[180px]">
                           {
                            places.map((place, i) => {
                              return (
                                <div  key={i}>
                                  <SelectGroup>
                                    <SelectLabel>{place.label}</SelectLabel>
                                      {
                                        place.items.map((item, i) => {
                                          return <SelectItem key={i} value={item.value}>{item.label}</SelectItem>
                                        })
                                      }
                                  </SelectGroup>
                                  <Separator className="ym-2 yborder"/>
                                </div>
                              )
                            })
                           }
                          </ScrollArea>
                        </SelectContent>
                      </Select>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant='outline'>
                            <CalendarDays />
                            <span className="yfont-bold">
                              {
                                date ? format(date, "PPP") : "Kunini belgilash"
                              }
                            </span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="yp-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="yrounded-md ymx-auto"
                          />  
                        </PopoverContent>                        
                      </Popover>
                      <Label className="yflex ygap-1 yitems-center" htmlFor="time"><span className="yfont-bold">Vaqt:</span> <span className="yfont-bold yitalic">Am</span> <Sun size={16}/> <span className="yfont-bold yitalic">Pm</span> <Moon size={16}/></Label>
                      <Input type="time" id="time" defaultValue='11:00'/>
                    </div>
                    <Label htmlFor="price"><span className="yfont-bold">Narxi:</span></Label>
                    <Input type="number" id="price" placeholder="So'mda kiriting!"/>
                    <Button variant='outline'>
                      <span className="yfont-bold">Joylash</span>
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
              <ScrollArea className="yflex yflex-col"></ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
