"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Check, X, Edit, Trash2 } from "lucide-react"

// Mock data for restaurants
const initialRestaurants = [
  { id: 1, name: "Tasty Bites", address: "123 Main St, City", isVerified: true },
  { id: 2, name: "Green Leaf Cafe", address: "456 Elm St, City", isVerified: false },
  { id: 3, name: "Spice Avenue", address: "789 Oak St, City", isVerified: true },
  { id: 4, name: "Fresh Fusion", address: "101 Pine St, City", isVerified: false },
]

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState(initialRestaurants)

  const toggleVerification = (id: number) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, isVerified: !restaurant.isVerified } : restaurant,
      ),
    )
  }

  const deleteRestaurant = (id: number) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id))
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Restaurant Management</h2>

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
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
              <TableCell className="font-medium">{restaurant.name}</TableCell>
              <TableCell>{restaurant.address}</TableCell>
              <TableCell>
                <Button
                  variant={restaurant.isVerified ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleVerification(restaurant.id)}
                >
                  {restaurant.isVerified ? (
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
                  <Button variant="destructive" size="icon" onClick={() => deleteRestaurant(restaurant.id)}>
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

