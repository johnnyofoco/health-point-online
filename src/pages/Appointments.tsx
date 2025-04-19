
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

// Sample data
const appointmentStatuses = {
  scheduled: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  canceled: "bg-red-100 text-red-800",
  "in-progress": "bg-amber-100 text-amber-800",
};

const appointments = [
  {
    id: 1,
    patient: "Alice Johnson",
    doctor: "Dr. Michael Chen",
    specialty: "Cardiology",
    date: new Date(2025, 3, 19),
    time: "09:30 AM",
    status: "scheduled",
  },
  {
    id: 2,
    patient: "Bob Smith",
    doctor: "Dr. Sarah Williams",
    specialty: "Pediatrics",
    date: new Date(2025, 3, 19),
    time: "10:30 AM",
    status: "in-progress",
  },
  {
    id: 3,
    patient: "Carol Martinez",
    doctor: "Dr. John Lewis",
    specialty: "Dermatology",
    date: new Date(2025, 3, 19),
    time: "11:15 AM",
    status: "completed",
  },
  {
    id: 4,
    patient: "David Wilson",
    doctor: "Dr. Emily Brown",
    specialty: "Neurology",
    date: new Date(2025, 3, 20),
    time: "09:00 AM",
    status: "scheduled",
  },
  {
    id: 5,
    patient: "Eva Garcia",
    doctor: "Dr. Michael Chen",
    specialty: "Cardiology",
    date: new Date(2025, 3, 20),
    time: "02:00 PM",
    status: "canceled",
  },
];

const Appointments = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="page-title">Appointments</h1>
          <p className="text-muted-foreground">
            View and manage appointment schedule
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Appointment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="col-span-1 card-transition">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className={cn("pointer-events-auto")}
            />
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3 card-transition">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Appointment List</CardTitle>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Filters</h4>
                        <p className="text-sm text-muted-foreground">
                          Filter appointments by various criteria
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <label htmlFor="status">Status</label>
                          <Select>
                            <SelectTrigger className="col-span-2 h-8">
                              <SelectValue placeholder="Any status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All</SelectItem>
                              <SelectItem value="scheduled">Scheduled</SelectItem>
                              <SelectItem value="in-progress">In Progress</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="canceled">Canceled</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <label htmlFor="specialty">Specialty</label>
                          <Select>
                            <SelectTrigger className="col-span-2 h-8">
                              <SelectValue placeholder="Any specialty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All</SelectItem>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="dermatology">Dermatology</SelectItem>
                              <SelectItem value="neurology">Neurology</SelectItem>
                              <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button>Apply Filters</Button>
                    </div>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Specialty</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments
                  .filter((appt) => {
                    if (!date) return true;
                    return (
                      appt.date.getDate() === date.getDate() &&
                      appt.date.getMonth() === date.getMonth() &&
                      appt.date.getFullYear() === date.getFullYear()
                    );
                  })
                  .map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell className="font-medium">
                        {appointment.patient}
                      </TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>{appointment.specialty}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={cn(
                            "capitalize",
                            appointmentStatuses[
                              appointment.status as keyof typeof appointmentStatuses
                            ]
                          )}
                        >
                          {appointment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Appointments;
