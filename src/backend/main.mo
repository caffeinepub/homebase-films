import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Text.compare(a.email, b.email);
    };
  };

  let contactSubmissions = Map.empty<Principal, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    message : Text,
  ) : async () {
    if (contactSubmissions.containsKey(caller)) { Runtime.trap("You already contacted us, need extra help?") };
    let submission : ContactSubmission = {
      name;
      email;
      message;
    };
    contactSubmissions.add(caller, submission);
  };

  public query ({ caller }) func hasContacted() : async Bool {
    contactSubmissions.containsKey(caller);
  };

  public query func getAllSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };
};
