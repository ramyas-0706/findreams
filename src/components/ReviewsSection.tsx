import { Star, Camera, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  image_url: string | null;
  created_at: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", role: "Client", rating: 5, text: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setReviews(data as Review[]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    setSubmitting(true);

    let image_url: string | null = null;

    if (imageFile) {
      const ext = imageFile.name.split(".").pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from("review-images")
        .upload(path, imageFile);

      if (!uploadError) {
        const { data: urlData } = supabase.storage.from("review-images").getPublicUrl(path);
        image_url = urlData.publicUrl;
      }
    }

    await supabase.from("reviews").insert({
      name: form.name.trim().slice(0, 100),
      role: form.role.trim().slice(0, 50) || "Client",
      rating: form.rating,
      text: form.text.trim().slice(0, 500),
      image_url,
    });

    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", role: "Client", rating: 5, text: "" });
    setImageFile(null);
    setImagePreview(null);
    fetchReviews();
    setTimeout(() => { setSubmitted(false); setShowForm(false); }, 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h3 className="font-display text-2xl font-bold">
          Client <span className="gold-gradient-text">Reviews</span>
        </h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="gold-gradient-bg text-primary-foreground px-6 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-transform"
        >
          {showForm ? "Close" : "Write a Review"}
        </button>
      </div>

      {/* Submit Form */}
      {showForm && (
        <motion.form
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          onSubmit={handleSubmit}
          className="luxury-card rounded-2xl p-6 mb-8 space-y-4"
        >
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-primary font-semibold text-lg">Thank you for your review! ✨</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-silver-light">Your Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-silver-light">Service Used</label>
                  <input
                    type="text"
                    maxLength={50}
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="e.g. Home Loan Client"
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="text-sm font-medium mb-2 block text-silver-light">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm({ ...form, rating: s })}
                      className="transition-transform hover:scale-125"
                    >
                      <Star className={`w-7 h-7 ${s <= form.rating ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block text-silver-light">Your Review</label>
                <textarea
                  required
                  maxLength={500}
                  rows={3}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Share your experience..."
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="text-sm font-medium mb-1.5 block text-silver-light">Photo (Optional)</label>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors text-sm text-silver">
                    <Camera className="w-4 h-4 text-primary" />
                    {imageFile ? "Change Photo" : "Add Photo"}
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="w-12 h-12 rounded-full object-cover border-2 border-primary/30" />
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="gold-gradient-bg text-primary-foreground px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Review"}
                <Send className="w-4 h-4" />
              </button>
            </>
          )}
        </motion.form>
      )}

      {/* Reviews Grid */}
      {reviews.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="luxury-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                {review.image_url ? (
                  <img src={review.image_url} alt={review.name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/30" />
                ) : (
                  <div className="w-10 h-10 rounded-full gold-border-strong flex items-center justify-center bg-primary/[0.08] text-primary font-bold text-sm">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s < review.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-silver text-sm leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-silver">
          <p className="text-lg">No reviews yet. Be the first to share your experience!</p>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
