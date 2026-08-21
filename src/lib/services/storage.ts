import { Plan, Trainer, ClassSchedule, GalleryItem, FAQ } from "@/types";
import * as fs from "./firestore";

// Re-export Firestore types
export type { Booking, ContactMessage } from "./firestore";

// ===== Plans =====
export async function getPlans(): Promise<Plan[]> {
  try {
    return await fs.getPlans();
  } catch {
    return [];
  }
}

export async function savePlan(plan: Omit<Plan, "id">): Promise<string> {
  return fs.savePlan(plan);
}

export async function updatePlan(id: string, data: Partial<Plan>): Promise<void> {
  return fs.updatePlan(id, data);
}

export async function deletePlan(id: string): Promise<void> {
  return fs.deletePlan(id);
}

// ===== Trainers =====
export async function getTrainers(): Promise<Trainer[]> {
  try {
    return await fs.getTrainers();
  } catch {
    return [];
  }
}

export async function saveTrainer(trainer: Omit<Trainer, "id">): Promise<string> {
  return fs.saveTrainer(trainer);
}

export async function updateTrainer(id: string, data: Partial<Trainer>): Promise<void> {
  return fs.updateTrainer(id, data);
}

export async function deleteTrainer(id: string): Promise<void> {
  return fs.deleteTrainer(id);
}

// ===== Classes =====
export async function getClasses(): Promise<ClassSchedule[]> {
  try {
    return await fs.getClasses();
  } catch {
    return [];
  }
}

export async function saveClass(cls: Omit<ClassSchedule, "id">): Promise<string> {
  return fs.saveClass(cls);
}

export async function updateClass(id: string, data: Partial<ClassSchedule>): Promise<void> {
  return fs.updateClass(id, data);
}

export async function deleteClass(id: string): Promise<void> {
  return fs.deleteClass(id);
}

// ===== Gallery =====
export async function getGallery(): Promise<GalleryItem[]> {
  try {
    return await fs.getGallery();
  } catch {
    return [];
  }
}

export async function saveGalleryItem(item: Omit<GalleryItem, "id">): Promise<string> {
  return fs.saveGalleryItem(item);
}

export async function updateGalleryItem(id: string, data: Partial<GalleryItem>): Promise<void> {
  return fs.updateGalleryItem(id, data);
}

export async function deleteGalleryItem(id: string): Promise<void> {
  return fs.deleteGalleryItem(id);
}

// ===== FAQs =====
export async function getFAQs(): Promise<FAQ[]> {
  try {
    return await fs.getFAQs();
  } catch {
    return [];
  }
}

export async function saveFAQ(faq: Omit<FAQ, "id">): Promise<string> {
  return fs.saveFAQ(faq);
}

export async function updateFAQ(id: string, data: Partial<FAQ>): Promise<void> {
  return fs.updateFAQ(id, data);
}

export async function deleteFAQ(id: string): Promise<void> {
  return fs.deleteFAQ(id);
}

// ===== Messages =====
export async function getMessages() {
  return fs.getMessages();
}

export async function saveMessage(msg: Parameters<typeof fs.saveMessage>[0]): Promise<string> {
  return fs.saveMessage(msg);
}

export async function markMessageRead(id: string): Promise<void> {
  return fs.markMessageRead(id);
}

export async function deleteMessage(id: string): Promise<void> {
  return fs.deleteMessage(id);
}

// ===== Bookings =====
export async function getBookings() {
  return fs.getBookings();
}

export async function saveBooking(booking: Parameters<typeof fs.saveBooking>[0]): Promise<string> {
  return fs.saveBooking(booking);
}

export async function updateBookingStatus(id: string, status: "confirmed" | "pending" | "cancelled"): Promise<void> {
  return fs.updateBookingStatus(id, status);
}

export async function deleteBooking(id: string): Promise<void> {
  return fs.deleteBooking(id);
}
