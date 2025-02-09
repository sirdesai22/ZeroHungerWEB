"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Check, X, Edit, Trash2 } from "lucide-react"

// Mock data for NGOs
const initialNGOs = [
  { id: 1, name: "Food for All", address: "234 Charity Ln, City", isVerified: true },
  { id: 2, name: "Hunger Relief", address: "567 Hope St, City", isVerified: false },
  { id: 3, name: "Community Pantry", address: "890 Giving Ave, City", isVerified: true },
  { id: 4, name: "Meals on Wheels", address: "112 Care Blvd, City", isVerified: false },
]

export default function NGOsPage() {
  const [ngos, setNGOs] = useState(initialNGOs)

  const toggleVerification = (id: number) => {
    setNGOs(ngos.map((ngo) => (ngo.id === id ? { ...ngo, isVerified: !ngo.isVerified } : ngo)))
  }

  const deleteNGO = (id: number) => {
    setNGOs(ngos.filter((ngo) => ngo.id !== id))
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">NGO Management</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Verification Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ngos.map((ngo) => (
            <TableRow key={ngo.id}>
              <TableCell className="font-medium">{ngo.name}</TableCell>
              <TableCell>{ngo.address}</TableCell>
              <TableCell>
                <Button
                  variant={ngo.isVerified ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleVerification(ngo.id)}
                >
                  {ngo.isVerified ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Verified
                    </>
                  ) : (
                    <>
                      <X className="mr-2 h-4 w-4" /> Unverified
                    </>
                  )}
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => deleteNGO(ngo.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

