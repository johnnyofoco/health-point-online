import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, User, UserPlus, Calendar, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const statCards = [
  {
    title: "Total Patients",
    value: "1,248",
    change: "+12% from last month",
    icon: User,
    color: "text-blue-500",
  },
  {
    title: "New Patients",
    value: "86",
    change: "+4% from last month",
    icon: UserPlus,
    color: "text-green-500",
  },
  {
    title: "Appointments Today",
    value: "32",
    change: "8 remaining",
    icon: Calendar,
    color: "text-violet-500",
  },
  {
    title: "Average Wait Time",
    value: "18m",
    change: "↓ 3m from last week",
    icon: Clock,
    color: "text-orange-500",
  },
];

const upcomingAppointments = [
  {
    patient: "Sarah Johnson",
    time: "10:30 AM",
    type: "Check-up",
    doctor: "Dr. Michael Chen",
  },
  {
    patient: "Robert Martinez",
    time: "11:15 AM",
    type: "Follow-up",
    doctor: "Dr. Emily Brown",
  },
  {
    patient: "Jennifer Wong",
    time: "2:00 PM",
    type: "Consultation",
    doctor: "Dr. Michael Chen",
  },
  {
    patient: "David Thompson",
    time: "3:30 PM",
    type: "Vaccination",
    doctor: "Dr. Emily Brown",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, view your hospital overview</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-2">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Appointment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, index) => (
          <Card key={index} className="card-transition">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className={cn("h-4 w-4", card.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 card-transition">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-border last:border-0 pb-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center">
                      <CalendarIcon className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{appointment.patient}</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.type} • {appointment.doctor}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Appointments
            </Button>
          </CardContent>
        </Card>

        <Card className="card-transition">
          <CardHeader>
            <CardTitle>Resource Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Exam Rooms</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Practitioners</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Lab Equipment</span>
                  <span className="text-sm font-medium">62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Medications</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-lg border p-3 text-sm">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span>Some resources are nearing capacity</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
