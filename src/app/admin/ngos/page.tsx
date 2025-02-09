"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Check, X, Edit, Trash2 } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function NGOsPage() {
  const [ngos, setNGOs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ngoData, setNgoData] = useState(null);

  useEffect(() => {
    const fetchNGOs = async () => {
      const response = await fetch('/api/ngo/all');
      const { data, error } = await response.json();
      if (error) {
        console.error("Error fetching NGOs:", error);
      } else {
        setNGOs(data);
      }
    }

    fetchNGOs();
  }, []);

  const toggleVerification = async (id: number) => {
    const updatedNGOs = ngos.map((ngo) =>
      ngo.id === id ? { ...ngo, is_verified: !ngo.is_verified } : ngo
    );
    setNGOs(updatedNGOs);

    const { error } = await supabase
      .from("ngo")
      .update({ is_verified: !ngos.find((ngo) => ngo.id === id)?.is_verified })
      .eq("id", id);

    if (error) {
      console.error("Error updating NGO verification:", error);
    }
  }

  const editNGO = async (id: number) => {
    const response = await supabase
      .from("ngos")
      .select()
      .eq("id", id)
      .single();

    if (response.error) {
      console.error("Error fetching NGO for editing:", response.error);
      return;
    }

    setNgoData(response.data);
    setIsOpen(true);
  }

  const deleteNGO = async (id: number) => {
    const { error } = await supabase.from("ngo").delete().eq("id", id);

    if (error) {
      console.error("Error deleting NGO:", error);
    } else {
      setNGOs(ngos.filter((ngo) => ngo.id !== id));
    }
  }

  const handleCloseDialog = () => {
    setIsOpen(false);
    setNgoData(null);
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">NGO Management</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Verification Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ngos.map((ngo) => (
            <TableRow key={ngo.id}>
              <TableCell className="font-medium">{ngo.name}</TableCell>
              <TableCell>
                <Button
                  variant={ngo?.is_verified ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    toggleVerification(ngo.id);
                  }}
                >
                  {ngo?.is_verified ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Verified
                    </>
                  ) : (
                    <>
                      <X className="mr-2 h-4 w-4 bgblack" /> Unverified
                    </>
                  )}
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="destructive" size="icon" onClick={() => deleteNGO(ngo.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isOpen} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogTitle>Edit NGO</DialogTitle>
          <DialogDescription>
            {/* Add form fields here to edit the NGO data */}
            <input
              type="text"
              value={ngoData?.name || ''}
              onChange={(e) => setNgoData({ ...ngoData, name: e.target.value })}
              placeholder="NGO Name"
              className="mb-4 p-2 border"
            />
            {/* Add other fields as necessary */}
          </DialogDescription>
          <Button onClick={handleCloseDialog}>Save</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
