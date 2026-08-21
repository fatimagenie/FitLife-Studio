import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Plan, Trainer, ClassSchedule, GalleryItem, FAQ } from "@/types";

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
  className?: string;
  trainer?: string;
  time?: string;
  day?: string;
  date: string;
  status: "confirmed" | "pending" | "cancelled";
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

async function getAll<T>(collectionName: string): Promise<T[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as T));
}

async function getById<T>(collectionName: string, id: string): Promise<T | null> {
  const snap = await getDoc(doc(db, collectionName, id));
  return snap.exists() ? ({ id: snap.id, ...snap.data() } as T) : null;
}

async function add<T>(collectionName: string, data: Omit<T, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

async function update<T>(collectionName: string, id: string, data: Partial<T>): Promise<void> {
  await updateDoc(doc(db, collectionName, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

async function remove(collectionName: string, id: string): Promise<void> {
  await deleteDoc(doc(db, collectionName, id));
}

// Plans
export async function getPlans(): Promise<Plan[]> {
  return getAll<Plan>("plans");
}

export async function savePlan(plan: Omit<Plan, "id">): Promise<string> {
  return add<Plan>("plans", plan);
}

export async function updatePlan(id: string, data: Partial<Plan>): Promise<void> {
  await update<Plan>("plans", id, data);
}

export async function deletePlan(id: string): Promise<void> {
  await remove("plans", id);
}

// Trainers
export async function getTrainers(): Promise<Trainer[]> {
  return getAll<Trainer>("trainers");
}

export async function saveTrainer(trainer: Omit<Trainer, "id">): Promise<string> {
  return add<Trainer>("trainers", trainer);
}

export async function updateTrainer(id: string, data: Partial<Trainer>): Promise<void> {
  await update<Trainer>("trainers", id, data);
}

export async function deleteTrainer(id: string): Promise<void> {
  await remove("trainers", id);
}

// Classes
export async function getClasses(): Promise<ClassSchedule[]> {
  return getAll<ClassSchedule>("classes");
}

export async function saveClass(cls: Omit<ClassSchedule, "id">): Promise<string> {
  return add<ClassSchedule>("classes", cls);
}

export async function updateClass(id: string, data: Partial<ClassSchedule>): Promise<void> {
  await update<ClassSchedule>("classes", id, data);
}

export async function deleteClass(id: string): Promise<void> {
  await remove("classes", id);
}

// Gallery
export async function getGallery(): Promise<GalleryItem[]> {
  return getAll<GalleryItem>("gallery");
}

export async function saveGalleryItem(item: Omit<GalleryItem, "id">): Promise<string> {
  return add<GalleryItem>("gallery", item);
}

export async function updateGalleryItem(id: string, data: Partial<GalleryItem>): Promise<void> {
  await update<GalleryItem>("gallery", id, data);
}

export async function deleteGalleryItem(id: string): Promise<void> {
  await remove("gallery", id);
}

// FAQs
export async function getFAQs(): Promise<FAQ[]> {
  return getAll<FAQ>("faqs");
}

export async function saveFAQ(faq: Omit<FAQ, "id">): Promise<string> {
  return add<FAQ>("faqs", faq);
}

export async function updateFAQ(id: string, data: Partial<FAQ>): Promise<void> {
  await update<FAQ>("faqs", id, data);
}

export async function deleteFAQ(id: string): Promise<void> {
  await remove("faqs", id);
}

// Messages
export async function getMessages(): Promise<ContactMessage[]> {
  return getAll<ContactMessage>("messages");
}

export async function saveMessage(msg: Omit<ContactMessage, "id" | "date" | "read">): Promise<string> {
  return add<ContactMessage>("messages", {
    ...msg,
    date: new Date().toISOString(),
    read: false,
  } as Omit<ContactMessage, "id">);
}

export async function markMessageRead(id: string): Promise<void> {
  await update<ContactMessage>("messages", id, { read: true } as Partial<ContactMessage>);
}

export async function deleteMessage(id: string): Promise<void> {
  await remove("messages", id);
}

// Bookings
export async function getBookings(): Promise<Booking[]> {
  return getAll<Booking>("bookings");
}

export async function saveBooking(booking: Omit<Booking, "id" | "date" | "status">): Promise<string> {
  return add<Booking>("bookings", {
    ...booking,
    date: new Date().toISOString(),
    status: "confirmed",
  } as Omit<Booking, "id">);
}

export async function updateBookingStatus(id: string, status: Booking["status"]): Promise<void> {
  await update<Booking>("bookings", id, { status } as Partial<Booking>);
}

export async function deleteBooking(id: string): Promise<void> {
  await remove("bookings", id);
}
