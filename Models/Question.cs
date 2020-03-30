using System;
using System.Collections.Generic;

namespace SuncoastOverflow.Models
{
  public class Question
  {
    public int Id { get; set; }
    public string Author { get; set; }
    public int VoteCount { get; set; }
    public bool Resolved { get; set; }
    public DateTime TimeSubmitted { get; set; }
    public List<Answer> Answers { get; set; } = new List<Answer>();
  }
}