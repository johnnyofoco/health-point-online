
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Plus, Search } from "lucide-react";

const medicalRecords = [
  {
    id: "MR001",
    patient: "Alice Johnson",
    date: "April 15, 2025",
    doctor: "Dr. Michael Chen",
    type: "Check-up",
    diagnosis: "Seasonal allergies",
    notes: "Patient presented with nasal congestion and itchy eyes. Prescribed antihistamines for symptom relief.",
  },
  {
    id: "MR002",
    patient: "Robert Smith",
    date: "April 12, 2025",
    doctor: "Dr. Sarah Williams",
    type: "Follow-up",
    diagnosis: "Hypertension - controlled",
    notes: "Blood pressure readings remain within target range. Continuing current medication regimen.",
  },
  {
    id: "MR003",
    patient: "Maria Garcia",
    date: "April 10, 2025",
    doctor: "Dr. John Lewis",
    type: "Consultation",
    diagnosis: "Migraine",
    notes: "Patient reports increase in migraine frequency. Adjusted medication dosage and recommended lifestyle modifications.",
  },
];

const MedicalRecords = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="page-title">Medical Records</h1>
          <p className="text-muted-foreground">
            Access and manage patient medical history
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Record
          </Button>
        </div>
      </div>

      <Card className="card-transition">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Records</CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="h-4 w-4 absolute left-2.5 top-3 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search records..."
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recent">
            <TabsList className="mb-6">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="all">All Records</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            <TabsContent value="recent" className="space-y-6">
              {medicalRecords.map((record) => (
                <div
                  key={record.id}
                  className="border rounded-lg p-6 hover:shadow-sm transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{record.patient}</h3>
                        <p className="text-sm text-muted-foreground">
                          {record.date} • {record.type}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Doctor</p>
                      <p className="text-sm text-muted-foreground">
                        {record.doctor}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm font-medium">Diagnosis</h4>
                      <p>{record.diagnosis}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Notes</h4>
                      <p className="text-sm">{record.notes}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Print
                    </Button>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="all">
              <div className="py-8 text-center">
                <p className="text-muted-foreground">Full record database available here</p>
              </div>
            </TabsContent>
            <TabsContent value="templates">
              <div className="py-8 text-center">
                <p className="text-muted-foreground">Medical record templates</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalRecords;
