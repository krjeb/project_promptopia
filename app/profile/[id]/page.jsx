"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";

import Profile from "@/components/Profile";

const UserProfile = () => {
  const params = useParams();
  const userId = params?.id; // Extract to a primitive variable
  const searchParams = useSearchParams();
  const username = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (userId) fetchPosts();
  }, [userId]);

  return (
    <Profile
      name={username}
      desc={`Welcome to ${username}'s personalized profile page. Explore ${username}'s exceptional prompts and be inspired by the power of their imagination.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
