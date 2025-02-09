"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Check, X, Edit, Trash2 } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"  // Make sure to have your Supabase client setup

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch('/api/restaurent/all');
      const { data, error } = await response.json();
      if (error) {
        console.error("Error fetching Restaurants:", error);
      } else {
        setRestaurants(data);
      }
    }

    fetchRestaurants();
  }, []);

  const toggleVerification = async (id: number) => {
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === id ? { ...restaurant, is_verified: !restaurant.is_verified } : restaurant
    );
    setRestaurants(updatedRestaurants);

    const { error } = await supabase
      .from("users")
      .update({ is_verified: !restaurants.find((restaurant) => restaurant.id === id)?.is_verified })
      .eq("id", id);

    if (error) {
      console.error("Error updating Restaurant verification:", error);
    }
  }

  const deleteRestaurant = async (id: number) => {
    const { error } = await supabase.from("users").delete().eq("id", id);
    
    if (error) {
      console.error("Error deleting Restaurant:", error);
    } else {
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Restaurant Management</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Verification Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
              <TableCell className="font-medium">{restaurant.name}</TableCell>
              <TableCell>
                <Button
                  variant={restaurant?.is_verified ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleVerification(restaurant.id)}
                >
                  {restaurant?.is_verified ? (
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
                  {/* <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button> */}
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
