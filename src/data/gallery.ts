import { GalleryItem } from "@/types";

export const galleryImages: GalleryItem[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Gym Floor with Modern Equipment", category: "gym" },
  { id: "2", src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", alt: "Strength Training Zone", category: "gym" },
  { id: "3", src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", alt: "Cardio Section", category: "gym" },
  { id: "4", src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", alt: "Group Yoga Class", category: "classes" },
  { id: "5", src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", alt: "HIIT Training Session", category: "classes" },
  { id: "6", src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80", alt: "CrossFit Workout", category: "classes" },
  { id: "7", src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80", alt: "Boxing Training", category: "classes" },
  { id: "8", src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", alt: "Personal Training Session", category: "classes" },
  { id: "9", src: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=800&q=80", alt: "Free Weights Area", category: "gym" },
  { id: "10", src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80", alt: "Fitness Competition Event", category: "events" },
  { id: "11", src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Healthy Nutrition Workshop", category: "events" },
  { id: "12", src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80", alt: "Members Celebration", category: "events" },
  { id: "13", src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80", alt: "Pilates Reformer Class", category: "classes" },
  { id: "14", src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80", alt: "Functional Training Zone", category: "gym" },
  { id: "15", src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800&q=80", alt: "Strength Progress", category: "transformations" },
  { id: "16", src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80", alt: "Powerlifting Training", category: "gym" },
];

export const galleryCategories = [
  { key: "all", label: "All" },
  { key: "gym", label: "Gym" },
  { key: "classes", label: "Classes" },
  { key: "events", label: "Events" },
  { key: "transformations", label: "Transformations" },
];
