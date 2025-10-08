export default function Footer() {
    return (
        <footer className="bg-[#F3F4F6] text-center py-4 mt-8 border-t border-[#6B7280]">
            <p className="text-sm text-[#6B7280]">
                © {new Date().getFullYear()} Mini Market. All rights reserved.
            </p>
        </footer>
    );
}